using BusinessObject.DTO;
using BusinessObject.Models;
using Newtonsoft.Json;
using Supabase;
using Supabase.Postgrest;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BusinessObject.Services
{
    public class TableDAO
    {
        private readonly Supabase.Client _client;

        public TableDAO(Supabase.Client client)
        {
            _client = client;
        }

        public async Task<List<GetTableResponse>> GetAllTables()
        {
            var response = await _client
                .From<Table>()
                .Get();
            var tables = response.Models;

            // Chuyển đổi sang danh sách TableDTO
            var listTables = tables.
                Select(table => new GetTableResponse
                    {
                        Id = table.Id,
                        TableNumber = table.TableNumber,
                        Capacity = table.Capacity,
                        Status = table.Status,
                        LocationDescription = table.LocationDescription,
                        CreatedAt = table.CreatedAt,
                        UpdatedAt = table.UpdatedAt
                    })
                .ToList();

            return listTables;
        }

        public async Task<GetTableResponse?> GetTableById(Guid id)
        {
            try
            {
                var response = await _client
                    .From<Table>()
                     .Where(x => x.Id == id)
                    .Single();
                if (response == null)
                {
                    throw new Exception("Table Not Found!");
                }
                else
                {
                    var tableDetail = new GetTableResponse
                    {
                        Id = response.Id,
                        TableNumber = response.TableNumber,
                        Capacity = response.Capacity,
                        Status = response.Status,
                        LocationDescription = response.LocationDescription,
                        CreatedAt = response.CreatedAt,
                        UpdatedAt = response.UpdatedAt
                    };
                    return tableDetail;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        } 
        public bool GetTableByNumber(string number,Guid shopid)
        {
            try
            {
                var response = _client
                    .From<Table>()
                     .Where(x => x.TableNumber == number && x.ShopId==shopid)
                    .Single();
                if (response == null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<GetTableResponse> CreateTable(CreateTableRequest createTable)
        {
            if (!GetTableByNumber(createTable.TableNumber,createTable.ShopId))
            {
                 throw new Exception("Error! Table Number is already exist!");
            }
            var table = new Table
            {
                Id = Guid.NewGuid(),
                TableNumber = createTable.TableNumber,
                Capacity = createTable.Capacity,
                Status = createTable.Status,
                LocationDescription = createTable.LocationDescription,
                ShopId = createTable.ShopId,
                CreatedAt = DateTime.UtcNow, 
                UpdatedAt = DateTime.UtcNow
            };
          
            var response = await _client
                .From<Table>()
                .Insert(table);
            if (response == null)
            {
                throw new Exception("Error! Insert error!");
            }

            // Trả về DTO với thông tin bảng đã tạo
            var tableResponse = new GetTableResponse
            {
                Id = table.Id,
                TableNumber = table.TableNumber,
                Capacity = table.Capacity,
                Status = table.Status,
                LocationDescription = table.LocationDescription,
                CreatedAt = table.CreatedAt
            };

            return tableResponse;
        }

        public async Task<GetTableResponse> UpdateTable(Guid id, UpdateTableRequest updateTable)
        {
            try
            {
                var response = await _client
                    .From<Table>()
                    .Where(x => x.Id == id)
                    .Single();

                if (response == null)
                {
                    throw new Exception("Error! Insert error!");
                }

                response.TableNumber = updateTable.TableNumber;
                response.Capacity = updateTable.Capacity;
                response.Status = updateTable.Status;
                response.LocationDescription = updateTable.LocationDescription;
                response.UpdatedAt = DateTime.UtcNow;

                var updateResponse = await _client
                    .From<Table>()
                    .Where(x => x.Id == id)
                    .Update(response);
                if (updateResponse == null)
                {
                    throw new Exception("Error! Update error!");
                }
                var updatedTableDTO = new GetTableResponse
                {
                    Id = response.Id,
                    TableNumber = response.TableNumber,
                    Capacity = response.Capacity,
                    Status = response.Status,
                    LocationDescription = response.LocationDescription,
                    CreatedAt = response.CreatedAt,
                    UpdatedAt = response.UpdatedAt
                };

                return updatedTableDTO;
            }
            catch (Exception ex)
            {
                throw new Exception("Update Table error!");
            }
        }

        public async Task<DeleteTableResponse> DeleteTable(Guid id)
        {
            try
            {
                if (GetTableById(id)!=null)
                {
                    return new DeleteTableResponse
                    {
                        IsDeleted = false,
                        Message = "Table not found"
                    };
                }
                await _client
                     .From<Table>()
                     .Where(x => x.Id == id)
                     .Delete();
                
                return new DeleteTableResponse
                {
                    IsDeleted = true,
                    Message = "Table successfully deleted."
                };
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


    }
}

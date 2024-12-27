using BusinessObject.DTO;
using BusinessObject.Models;
using BusinessObject.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShopManagementService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TableController : ControllerBase
    {
        private readonly TableDAO _tableDAO;

        public TableController(TableDAO tableService)
        {
            _tableDAO = tableService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTables()
        {
            try
            {
                var tables = await _tableDAO.GetAllTables();
                return Ok(tables); 
            }
            catch (Exception ex)
            {
                return BadRequest("Error! Can Not Get All Tables!\n Detail:\n" + ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetTableResponse>> GetById(Guid id)
        {
            var table = await _tableDAO.GetTableById(id);
            if (table == null) return NotFound("Table not found.");
            return Ok(table);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] CreateTableRequest createTable)
        {
            if (createTable == null)
            {
                return BadRequest("Invalid data.");
            }

            var createdTable = await _tableDAO.CreateTable(createTable);
            return Ok("Created succesfully!\n"+createdTable);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(Guid id, [FromBody] UpdateTableRequest updateTable)
        {
            if (updateTable == null)
            {
                return BadRequest("Invalid data.");
            }
            var updatedTable = await _tableDAO.UpdateTable(id, updateTable);
            return Ok(updatedTable);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var deleted = await _tableDAO.DeleteTable(id);
            if (!deleted.IsDeleted) return BadRequest(deleted.Message);
            return Ok(deleted.Message);
        }
    }
}

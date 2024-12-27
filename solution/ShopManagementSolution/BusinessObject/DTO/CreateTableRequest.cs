using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.DTO
{
    public class CreateTableRequest
    {
        public string TableNumber { get; set; }
        public int Capacity { get; set; }
        public string Status { get; set; }
        public string LocationDescription { get; set; }
        public Guid ShopId { get; set; }
    }
}

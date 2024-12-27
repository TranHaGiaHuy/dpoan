using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.DTO
{
    public class GetTableResponse
    {
        public Guid Id { get; set; }
        public string TableNumber { get; set; }
        public int Capacity { get; set; }
        public string Status { get; set; }
        public string LocationDescription { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}

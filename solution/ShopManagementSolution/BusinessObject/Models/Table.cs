using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;


namespace BusinessObject.Models
{
    [Table("tables")]
    public class Table : BaseModel
    {
        [PrimaryKey("id")]
        public Guid Id { get; set; }
        [Column("table_number")]
        public string TableNumber { get; set; }
        [Column("capacity")]
        public int Capacity { get; set; }
        [Column("status")]
        public string Status { get; set; }
        [Column("location_description")]
        public string LocationDescription { get; set; }

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }

        [Column("updated_at")]
        public DateTime UpdatedAt { get; set; }

        [Column("shop_id")]
        public Guid ShopId { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;

namespace ServiceAuto.API.Models
{
    public class Comanda
    {
        public int Id { get; set; }

        [Required]
        public string NumarMasina { get; set; }

        [Required]
        public string NumeClient { get; set; }

        [Required]
        public string NumarTelefon { get; set; }

        public string Descriere { get; set; }
    }
}
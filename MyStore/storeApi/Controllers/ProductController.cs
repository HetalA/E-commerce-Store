using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using storeApi.Data;
using storeApi.Entities;

namespace storeApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductController : BaseApiController
  {
    private readonly StoreContext ctx;
    public ProductController(StoreContext _ctx)
    {
      this.ctx = _ctx;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
      return await ctx.Products.ToListAsync();
    }
    public IActionResult NotFoundError()
    {
      return NotFound();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      var product = await ctx.Products.FindAsync(id);
      if(product==null) NotFoundError();
      return product;
    }

  }
}
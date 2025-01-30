import NavBar from "./NavBar";
import img from '../Images/ChefManiaImg.png'
import Comments from "./Comments";
export default function BlogPage(){
    return(
        <>
           <NavBar/>
           <div className="blog-container">
                <div className="blogcont">
                    <h3>Blog</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium rem quod beatae consequatur aperiam totam, magni odio labore accusamus pariatur! Temporibus facere asperiores illum saepe maiores hic eum numquam, earum sapiente ex nihil nam illo provident necessitatibus quasi itaque laudantium autem obcaecati dolore odio eligendi eveniet. Minima rerum fuga dignissimos eos? Cupiditate inventore, maiores cumque magnam quam esse ut sequi tempore quis, ducimus eaque aliquam praesentium suscipit nisi repellat aut hic animi nihil voluptate neque molestiae! Eos quae error voluptates provident necessitatibus iure reiciendis laudantium repellat eius, ducimus maxime tenetur! Quis numquam vel sequi ducimus eaque, repudiandae modi error unde perspiciatis dolorum doloremque. Rem sequi earum qui odit! Quae, debitis facilis. Dolorum ratione, perferendis unde magni nihil dolore natus iure fugiat. Blanditiis est aut maiores dolores error ipsa. Sed at, magni iste eos numquam molestias optio accusantium natus expedita illo. Fuga ipsa repellendus recusandae voluptatum, incidunt earum distinctio explicabo nesciunt nulla impedit quam at officia nihil ex aperiam! Iure, consequatur fugit! Incidunt asperiores id expedita nam autem culpa facilis, nulla a fugit totam, consequatur recusandae quod doloremque quisquam magni dolore quae deleniti? Animi accusamus quos recusandae, iste temporibus porro reiciendis velit delectus quaerat vero, officiis id nobis vel? Quisquam aperiam in qui cupiditate nesciunt impedit, eius minima commodi autem ipsa expedita sed adipisci quae ipsam facere earum vitae reiciendis iusto eaque molestias ex alias ea amet quo! Itaque nesciunt ipsam ratione assumenda ipsa enim. Architecto modi magni, sunt nam officiis tenetur? Amet modi nemo nam voluptatem! Molestiae alias sapiente architecto dicta dolorem expedita vitae reprehenderit aliquid facilis, distinctio quis dolores ex, voluptatem modi quo hic suscipit eligendi ab obcaecati officia perspiciatis enim iste minima? Quam placeat cum magni debitis quia hic! Alias incidunt asperiores suscipit dolor labore perferendis molestiae id quis veniam placeat voluptatum aperiam totam unde voluptatibus, dolores ducimus.</p>
                </div>
                <img src={img} className="blog img"></img>
                
           </div>
           <Comments/>
        </>
    )
}
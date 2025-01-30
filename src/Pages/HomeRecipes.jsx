import pizza from '../Images/Pizza.png'
import juices from '../Images/Juice.png'
import thali from '../Images/Thali.png'
import sandwich from '../Images/Sandwich.png'

import {motion, useScroll, useTransform} from 'framer-motion'

export default function HomeRecipes(){
    const{scrollY} = useScroll()

    const tY_1 = useTransform(scrollY,[0,100,200,300],[350,120,50,0])
    const scale_1 = useTransform(scrollY,[0,100,200,300],[0.5,0.7,0.9,1])
    const tY_2 = useTransform(scrollY,[500,600,700,800],[400,300,150,0])
    const opacity_3 = useTransform(scrollY,[900,1000,1200,1300],[0.2,0.5,0.7,1])
    const tY_4 = useTransform(scrollY,[0,100,200,300],[250,120,50,0])
    return(
        <>
            <motion.div style={{y:tY_1}} className="home-container">
                <img src={pizza} className='homerecipe'></img>
                <h1 className='home-heading'>HomeMade Pizza</h1>
                <p className='home-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus laboriosam dicta accusamus similique blanditiis, nulla corrupti quia aspernatur fuga consectetur soluta quae, assumenda incidunt deleniti culpa nobis aliquam non. Aspernatur cum, sequi laudantium assumenda enim laborum iste accusantium. Illum, soluta. Doloremque sapiente soluta magni! Obcaecati ducimus rerum culpa incidunt, aperiam fugit officiis impedit sequi nisi aut voluptate nam blanditiis velit, unde illo officia reprehenderit perferendis vitae corporis consectetur debitis eveniet hic temporibus. Saepe soluta nam natus magni, in beatae nihil provident doloremque corrupti repellat cumque hic numquam quod libero aliquid asperiores ipsa obcaecati sapiente unde possimus ab atque placeat explicabo. A repellendus, ullam temporibus vitae quae necessitatibus illo odit nostrum quas consequuntur, inventore, qui ea cumque eius animi nisi sunt iure incidunt! Nam, ipsam hic. Incidunt reiciendis unde earum! Ducimus mollitia, accusantium praesentium maxime reprehenderit ullam dolorem! Deserunt iure ullam ipsam nostrum corporis ipsa hic consequatur ad voluptate a at eum odit atque provident dignissimos, iusto labore voluptatibus ratione architecto eos eius quisquam molestiae. Dignissimos, nostrum vero. Praesentium cumque neque tenetur voluptates, porro aliquid natus ex rerum. Sint, velit. Adipisci libero tempore veniam quasi molestias cumque, modi molestiae assumenda perferendis eos totam amet ad nisi, illo magnam dolore at!</p>
            </motion.div>
            <motion.hr initial={{width:'0%'}}animate={{width:'90%'}} transition={{duration:1,delay:1}}></motion.hr>

            <motion.div style={{y:tY_2}} className="home-container">
                <img src={juices} className='homerecipe'></img>
                <h1 className='home-heading'>HomeMade Juices</h1>
                <p className='home-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus laboriosam dicta accusamus similique blanditiis, nulla corrupti quia aspernatur fuga consectetur soluta quae, assumenda incidunt deleniti culpa nobis aliquam non. Aspernatur cum, sequi laudantium assumenda enim laborum iste accusantium. Illum, soluta. Doloremque sapiente soluta magni! Obcaecati ducimus rerum culpa incidunt, aperiam fugit officiis impedit sequi nisi aut voluptate nam blanditiis velit, unde illo officia reprehenderit perferendis vitae corporis consectetur debitis eveniet hic temporibus. Saepe soluta nam natus magni, in beatae nihil provident doloremque corrupti repellat cumque hic numquam quod libero aliquid asperiores ipsa obcaecati sapiente unde possimus ab atque placeat explicabo. A repellendus, ullam temporibus vitae quae necessitatibus illo odit nostrum quas consequuntur, inventore, qui ea cumque eius animi nisi sunt iure incidunt! Nam, ipsam hic. Incidunt reiciendis unde earum! Ducimus mollitia, accusantium praesentium maxime reprehenderit ullam dolorem! Deserunt iure ullam ipsam nostrum corporis ipsa hic consequatur ad voluptate a at eum odit atque provident dignissimos, iusto labore voluptatibus ratione architecto eos eius quisquam molestiae. Dignissimos, nostrum vero. Praesentium cumque neque tenetur voluptates, porro aliquid natus ex rerum. Sint, velit. Adipisci libero tempore veniam quasi molestias cumque, modi molestiae assumenda perferendis eos totam amet ad nisi, illo magnam dolore at!</p>
            </motion.div>
            <motion.hr initial={{width:'0%'}}animate={{width:'90%'}} transition={{duration:1,delay:2}}></motion.hr>
            <motion.div style={{opacity:opacity_3}} className="home-container">
                <img src={thali} className='homerecipe'></img>
                <h1 className='home-heading'>HomeMade Thalis</h1>
                <p className='home-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus laboriosam dicta accusamus similique blanditiis, nulla corrupti quia aspernatur fuga consectetur soluta quae, assumenda incidunt deleniti culpa nobis aliquam non. Aspernatur cum, sequi laudantium assumenda enim laborum iste accusantium. Illum, soluta. Doloremque sapiente soluta magni! Obcaecati ducimus rerum culpa incidunt, aperiam fugit officiis impedit sequi nisi aut voluptate nam blanditiis velit, unde illo officia reprehenderit perferendis vitae corporis consectetur debitis eveniet hic temporibus. Saepe soluta nam natus magni, in beatae nihil provident doloremque corrupti repellat cumque hic numquam quod libero aliquid asperiores ipsa obcaecati sapiente unde possimus ab atque placeat explicabo. A repellendus, ullam temporibus vitae quae necessitatibus illo odit nostrum quas consequuntur, inventore, qui ea cumque eius animi nisi sunt iure incidunt! Nam, ipsam hic. Incidunt reiciendis unde earum! Ducimus mollitia, accusantium praesentium maxime reprehenderit ullam dolorem! Deserunt iure ullam ipsam nostrum corporis ipsa hic consequatur ad voluptate a at eum odit atque provident dignissimos, iusto labore voluptatibus ratione architecto eos eius quisquam molestiae. Dignissimos, nostrum vero. Praesentium cumque neque tenetur voluptates, porro aliquid natus ex rerum. Sint, velit. Adipisci libero tempore veniam quasi molestias cumque, modi molestiae assumenda perferendis eos totam amet ad nisi, illo magnam dolore at!</p>
            </motion.div>
            <motion.hr initial={{width:'0%'}}animate={{width:'90%'}} transition={{duration:1,delay:2.5}}></motion.hr>
            <div className="home-container">
                <img src={sandwich} className='homerecipe'></img>
                <h1 className='home-heading'>HomeMade Sandwiches</h1>
                <p className='home-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus laboriosam dicta accusamus similique blanditiis, nulla corrupti quia aspernatur fuga consectetur soluta quae, assumenda incidunt deleniti culpa nobis aliquam non. Aspernatur cum, sequi laudantium assumenda enim laborum iste accusantium. Illum, soluta. Doloremque sapiente soluta magni! Obcaecati ducimus rerum culpa incidunt, aperiam fugit officiis impedit sequi nisi aut voluptate nam blanditiis velit, unde illo officia reprehenderit perferendis vitae corporis consectetur debitis eveniet hic temporibus. Saepe soluta nam natus magni, in beatae nihil provident doloremque corrupti repellat cumque hic numquam quod libero aliquid asperiores ipsa obcaecati sapiente unde possimus ab atque placeat explicabo. A repellendus, ullam temporibus vitae quae necessitatibus illo odit nostrum quas consequuntur, inventore, qui ea cumque eius animi nisi sunt iure incidunt! Nam, ipsam hic. Incidunt reiciendis unde earum! Ducimus mollitia, accusantium praesentium maxime reprehenderit ullam dolorem! Deserunt iure ullam ipsam nostrum corporis ipsa hic consequatur ad voluptate a at eum odit atque provident dignissimos, iusto labore voluptatibus ratione architecto eos eius quisquam molestiae. Dignissimos, nostrum vero. Praesentium cumque neque tenetur voluptates, porro aliquid natus ex rerum. Sint, velit. Adipisci libero tempore veniam quasi molestias cumque, modi molestiae assumenda perferendis eos totam amet ad nisi, illo magnam dolore at!</p>
            </div>
            <motion.hr initial={{width:'0%'}}animate={{width:'90%'}} transition={{duration:1,delay:3}}></motion.hr>
        </>
    )
}
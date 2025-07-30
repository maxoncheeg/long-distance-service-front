import React from "react";
import image from "../assets/images/home/fon2.png";

export default function Home() {
    return (
        <>
            {/* <div className="w-full bg-white h-[500px]"></div> */}
            <div className="flex font-ruda flex-col md:sm:flex-row ">
                <div className="w-full">
                    <img src={image} alt="great image" className="w-full" />
                </div>
            </div>
            <div className="w-full h-[20000px]">
                <div className="flex">
                    <div className="h-[400px] w-full flex-1/3 bg-lds-accent-dark text-center align-middle text-white">БЕЗОПАСНО ПЕРЕВОЗИМ Lorem ipsum dolor sit amet.</div>
                    <div className="h-[400px] flex-2/3 bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veniam, animi maxime, cupiditate suscipit natus nostrum et voluptatem ea consequuntur praesentium culpa dicta expedita facilis eum! Eos, quis. Similique voluptatum consequatur obcaecati voluptas ipsam illo. Incidunt praesentium aliquam ducimus tempore cum asperiores quas veniam, numquam soluta est perspiciatis earum iusto inventore natus aperiam impedit eaque facere saepe ullam! Obcaecati saepe magnam minus, suscipit iste animi mollitia, harum quas, nulla corporis earum repellat vero! Laborum odio atque ducimus porro cum sit veritatis corporis ut qui at mollitia nisi consequuntur illo repellat, minima debitis autem facere. Earum consequuntur molestias praesentium minima, ducimus dolorem voluptatum optio cum odio atque voluptates officia temporibus veniam? Ab provident praesentium architecto, animi eos, eius consectetur culpa dolor ipsam obcaecati nemo itaque illo minus minima. Sapiente laboriosam adipisci magni asperiores amet rerum ad officia et perferendis, dolorum unde quam nemo illum? Ex hic id accusantium explicabo saepe, praesentium dolorem dolores reprehenderit voluptatibus tempora odio, repellendus repudiandae delectus asperiores eum sunt error consectetur. Magni dolorem ex voluptates odio expedita laboriosam dolor earum quod iusto iste, deserunt rem, beatae reprehenderit rerum blanditiis quis. Amet corporis modi exercitationem cum, nostrum excepturi aliquam tenetur quas voluptas, veniam recusandae labore nobis vel adipisci.</div>
                </div>
                <div className="text-center">тут какой то текст</div>
                <div className="text-center">тут какой то текст</div>
            </div>
        </>
    );
}

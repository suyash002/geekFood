import React from 'react'
const cards = [
    {
      name:"Gladis Lennon",
      position:"Head of SEO",
        profil_url: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
    },
    {
      name:"Gladis Lennon",
      position:"Head of SEO",
       profil_url: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
    },
    {
      name:"Gladis Lennon",
      position:"Head of SEO",
       profil_url: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
    },
    {
      name:"Gladis Lennon",
      position:"Head of SEO",
       profil_url: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.This one changed the game in the enterprise world.",
    },
    {
      name:"Gladis Lennon",
      position:"Head of SEO",
       profil_url: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
    },
    {
      name:"Gladis Lennon",
      position:"Head of SEO",
       profil_url: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
    },
  ];
const Card = () => {
  return (
    <>
    <div className="w-full px-4 py-8">
      <div className="ml-6 mr-8 grid mt grid-cols-2 md:grid-cols-3 gap-4">
        {cards.slice(0, 3).map((card, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700">{card.desc}</p>
              </blockquote>
              <div className="mt-2 flex items-center gap-4">
                <img
                  alt="Woman"
                  src={card.profil_url}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="text-sm">
                  <p className="font-medium">{card.name}</p>
                  <p className="mt-1">{card.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.slice(3, 6).map((card, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700">{card.desc}</p>
              </blockquote>
              <div className="mt-2 flex items-center gap-4">
                <img
                  alt="Woman"
                  src={card.profil_url}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="text-sm">
                  <p className="font-medium">{card.name}</p>
                  <p className="mt-1">{card.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    {/**/}
    
      </>
  )
}

export default Card
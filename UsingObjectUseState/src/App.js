import React from "react";
import Star from "./Star"

export default function App() {
  const [contact, setContact] = React.useState(
    {
      firstName : "Mars",
      lastName : "Ali",
      phone : "+923354883191",
      email : "mohtashim1974@outlook.com",
      isFavorite: true
    }
  );
  
  function toggleFavorite()
  {
    setContact(prevContact => (
        {
            ...contact,
            isFavorite : !prevContact.isFavorite
        })
      )
  }
  return (
      <main>
          <article>
              <img src="./images/avatar.png" className="card--image"/>
              <div>
                  <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                  <h2 className="card-title">{contact.firstName} {contact.lastName}</h2>
                  <p className="card--contact">{contact.phone}</p>
                  <p className="card--contact">{contact.email}</p>
              </div>
          </article>
      </main>
  );
}

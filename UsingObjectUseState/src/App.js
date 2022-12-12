import React from "react";

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
  let starIcon = contact.isFavorite ?  "filledStar.png" : "emptyStar.png"  
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
                  <img src={`../images/${starIcon}`} onClick={toggleFavorite} className="card--star"/>
                  <h2 className="card-title">{contact.firstName} {contact.lastName}</h2>
                  <p className="card--contact">{contact.phone}</p>
                  <p className="card--contact">{contact.email}</p>
              </div>
          </article>
      </main>
  );
}

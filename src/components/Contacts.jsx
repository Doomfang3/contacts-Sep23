import classes from './contacts.module.css'

const error = true

const Contacts = props => {
  console.log(props.contacts)

  return (
    <table className={error ? classes.errorTable : classes.table}>
      <thead>
        <tr>
          <th className={`${classes.title} ${classes.head}`}>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.contacts
          .toSorted((a, b) => {
            if (props.isSortedByName) {
              return a.name.localeCompare(b.name)
            } else if (props.isSortedByPopularity) {
              return a.popularity - b.popularity
            } else {
              return 0
            }
          })
          .map(contact => (
            <tr key={contact.id}>
              <td>
                <img className={classes.profilePic} src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100}</td>
              <td>{contact.wonOscar && '🏆'}</td>
              <td>{contact.wonEmmy && '🏆'}</td>
              <td>
                <button type='button' onClick={() => props.removeContact(contact.id)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Contacts

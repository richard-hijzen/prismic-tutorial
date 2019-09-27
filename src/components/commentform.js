import React from 'react'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function CommentForm(props) {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => alert('success'))
      .catch((error) => alert(error))
  }

  return (
    <section>
    <h3 className="reviews">Reviews</h3>

    <form
    className="review__form"
    name={props.id}
    method="POST"
    data-netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value={props.id} />
    <div className="field__form">
      <label>NAME</label>
      <input type="text" name="name" />
    </div>
    <div className="field__form">
      <label>EMAIL</label>
      <input type="email" name="email" />
    </div>
    <div className="field__form">
      <label>MESSAGE</label>
      <textarea name="message" />
    </div>

    <button className="button__form" type="submit">
      SEND
    </button>
  </form>
</section>
  )
}
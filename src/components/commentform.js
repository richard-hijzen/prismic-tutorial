import React from 'react'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Comment() {
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
      .then(() => alert("success!"))
      .catch((error) => alert(error))
  }

  return (
    <div className="commentform-container">
      <div className="commentform container">
        <form
          name="comment"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="comment" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="name">
              Your name:
            </label>
            <input type="text" id="name" name="name" onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="email">
              Your email:
            </label>
            <input type="email" id="email" name="email" onChange={handleChange} />
          </p>
          <p>
            <label htmlFor="textarea">
              Message:
            </label>
            <textarea id="textarea" name="message" rows="5" onChange={handleChange} />
          </p>
          <p className="submit-button">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  )
}
import React, { useState } from 'react';


const Form = () => {

  const [form, setForm] = useState({
    name: '',
    hp: '',
    attack: ''
  });

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setForm({...form, [property]: value})

  }

  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" value={form.name} onChange={changeHandler} name='name' />
      </div>

      <div>
        <label>HP</label>
        <input type="text" value={form.hp} onChange={changeHandler} name='hp' />
      </div>

      <div>
        <label>Attack</label>
        <input type="text" value={form.attack} onChange={changeHandler} name='attack' />
      </div>
    </form>
  )
}

export default Form

import { useState } from "react"
import { Form } from "react-bootstrap/lib/Navbar"

function Form() {
    function cadastrarFormula(e) {
        e.preventDefault()
        console.log('name')
        console.log('Cadastrou a Formula!')
    }

const [name, setname] = useState()
const [email, setemail] = useState()

return (
    <div>
        <h1>Meu Cadastro:</h1>
        <form onSubmit={cadastrarFormula}>
            <div>
                <label> htmlFor="name" Nome:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Digite a Formula"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label> htmlFor="email" email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Digite seu e-mail" />
                onChange={(e) => setemail(e.target.value)}

            </div>
            <div>
                <input 
                type="submit" 
                value="Cadastrar" 
                />
            </div>
        </form>
    </div>
)
}

import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
/** ICONS */
import {FiArrowLeft} from 'react-icons/fi';
/** CSS */
import './styles.css';
import '../../global.css';
/** LOGOS */
import logoImg from '../../assets/logo.svg';
/** API BD */
import api from '../../services/api';


export default function NewIncidents(){
    const history = useHistory();
        const ongId = localStorage.getItem('ongId');
        const [title, setTitle] = useState('');
        const [description , setDescription] = useState('');
        const [value, setValue] = useState('');

       

    async function handleNewIncidents(e){
            e.preventDefault();
            const data = {
                title, 
                description,
                value,
            };
            try{
                await api.post('incidents', data, 
                {
headers: { Authorization: ongId,
}
                }
                );
                alert (`Caso criado com sucesso`);
            
                history.push('/profile');
                } catch(err){
                    alert('Erro no cadastro, tente novamente.');
                }
            };
    return(
        <div className="new-incident">
<div className="content">
    <section>
<img src={logoImg} alt= "Be The Hero" />

<h1>
    Cadastrar novo Caso!
</h1>
<p>
    Descreva o caso detalhadamente para encontrar um Herói para resolver isso.abs
</p>

<Link className="back-link" to="/profile">
    <FiArrowLeft size={16} color="E02041"/>
       Voltar para Home
    </Link>
    </section>
    <form onSubmit={handleNewIncidents}>
        <input placeholder="Título do Caso" value={title} onChange={ e=> setTitle(e.target.value)}/>
        <textarea placeholder="Descrição" value={description} onChange={ e=> setDescription(e.target.value)}/>
        <input placeholder="Valor em Reais"value={value} onChange={ e=> setValue(e.target.value)}/>

        <button className="button"  type="submit">Cadastrar</button>
    </form>
</div>
</div>
    );
}
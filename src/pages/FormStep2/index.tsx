import * as C from './styles'
import {useHistory, Link} from 'react-router-dom'
import { Theme } from '../../components/Theme/intex'
import { SelectOption } from '../../components/SelectOption'
import {useForm, FormActions} from '../../context/FormContext'
import {useEffect} from 'react'


export const FormStep2 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleNextStep = () => {
        history.push('/step3')

    }

    useEffect(()=>{
        if(state.name === '') {
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        

    },[])

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level 
        })

    }

    return(
        <Theme>
            <C.Container>
            <p className='passo'>Step 2/3</p>
            <h2>{state.name}, what best describes you?</h2>
            <p>Choose the best option that describes your current level</p>

            <SelectOption
            title="I'm a beginner"
            description="I started programming less than 2 years ago"
            icon="🥳"
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
            />

             <SelectOption
                    title="I am a programmer"
                    description="I've been programming for 2 years or more"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

            <div>
                <Link to='/'>Back</Link>
                <button onClick={handleNextStep}>Next</button>
            </div>


            </C.Container>
        </Theme>
    )
}
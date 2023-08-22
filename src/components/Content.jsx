import { useEffect } from 'react'
import { dificuldade } from "../api/rotina"

export default function Content() {
    useEffect(() => {
        dificuldade();
      }, []);
    return(
        <main id="conteudo">

        </main>
    )
}
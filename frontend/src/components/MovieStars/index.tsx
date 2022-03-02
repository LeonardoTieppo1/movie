import{ReactComponent as StarFull} from 'assets/img/starF.svg';
import{ReactComponent as StarHalf} from 'assets/img/starH.svg';
import{ReactComponent as StarEmpty} from 'assets/img/starE.svg';
import './styles.css';
//criação das estrelas para a avaliação do filme
//no caso será estático

//criar uma função chamada de getFills
/*function getFills(score:number){
            const fills=[0,0,0,0,0];
            const integerPart=Math.floor(score);

            for (let i=0; i<integerPart;i++){
                fills[i]=1;
            }
            const diff= score-integerPart;
            if(diff>0){
                fills[integerPart]=0.5;
            }

            return fills;
            Essa função vai receber o score, 1 a 5, e vai retornar um vetor contendo a quantidade de preenchimento de estrela
            a função vai retornar somente 1, 0.5 e 0, o macete está no Math.floor onde pega a parte inteira preenche com numero 1, mas somente aqueles que corresponderem a parte inteira e caso necessite ele vai preencher a metade 

            A ideia é que o movieStars, ou Stars receba como argumento {score}:Props
            com isso deve se criar uma constante dentro do Stars recebendo a função getfills(score do filme)
            depois criar um componente auxiliar que vai passar como Star fill={fills[posição]}, no caso deve repetir 5 vezes 
            depois criar um componente de verificação para saber os valores das estrelas como 1,0.5,0 fora da function Stars
            para as estrelas usa-se o StarProps com o valor de fill:number
            depois crie uma função para saber as estrelas que serão visualizadas na tela
            fazendo um if e else de 1,0.5,0

            */
type Props={
    score:number;
};

type StarProps={
    fill:number;
}

            function getFills(score:number){
                const fills=[0,0,0,0,0];
                const integerPart=Math.floor(score);
    
                for (let i=0; i<integerPart;i++){
                    fills[i]=1;
                }
                const diff= score-integerPart;
                if(diff>0){
                    fills[integerPart]=0.5;
                }
    
                return fills;
            }

            function Star({fill}:StarProps){
                if(fill=== 0){
                    return <StarEmpty />
                } else if(fill===0.5){
                    return <StarHalf />
                } else {
                    return <StarFull />
                }
            }

function Stars({score}: Props){

    const fills=getFills(score);

    return(
        <div className="movie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[1]} />
            <Star fill={fills[2]} />
            <Star fill={fills[3]} />
            <Star fill={fills[4]} />
        </div>
    );
}
export default Stars;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import People from './People'
import Planets from './Planets'
import Films from './Films'
import Starships from './Starships'
import Species from './Species'

const APIResult = () => {

    let {type, id} = useParams();
    let [APIDetail, setAPIDetail] = useState({})
    let [error, setError] = useState(false)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${type}/${id}/`)
        .then(response=>{
            console.log("API response - ", response)
            setError(false)
            setAPIDetail(response.data)
        })
        .catch(err=>{
            console.log("API Error - ", err)
            setError(true)
        })      
    },[type,id])
    

    return (
        <>
            <div>
                <h2>Results of {type} and {id} from Star Wars API</h2>
            </div>
            <div>
                {
                error == true? 
                    <>
                        <h2>These are not the droids you are looking for</h2>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgYGBgZGhgYGBoYGBgYGBgZHBgYGhocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrISM0NTQ0NDQ0NDQ0NDE0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBBAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xABDEAACAQIEAwUGAwUGBAcAAAABAgADEQQSITEFQVEGB2FxgRMiMpGhsUJSwWJyktHhFCMkgrLwc6LC8RUWFyUzNGP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQEBAAICAQMEAwEBAAAAAAAAAQIRITEDEkFRMmFxgRMiQsEE/9oADAMBAAIRAxEAPwDGoUVaJgAhiCKEAFoREVCMZEQ4IYiAWgtDEEAETFxMAKAQ5Jw+HuMzHKmuvU9B4wMmhh2bQDlck6ADqTE1yBopuBa5ta55+kexGI93IoyrobDmRzJ6yFF2fRaNbxHMdZJq4ewDAHI2x8Rup8RIc7vZ3HBS1GouenU3U/mGzKeTeIheJsSb4cjLCyzu8d4C1A50u9FjZXtqD+R7bN95xSseNmU3Css4pIWGyxxVhNKImmmssXBqF2HnOJQXWWzs7Ru6jxErFGV4bfwSnkwi+CX+k869o6pes7dXY/Mmei+KP7PBOfy0v0nmviL3YxS8X8ljOZ+HNKxOWOQWktBBIkrHAILQBNoLRZWCAMwRUKAFaJIjkQYUCi1iYtYAdoRirRMARDtARDgAAhGLAgYQBMKLAikW5123PkN4ArD0Qfec2UfNvAfzhVqpZhsByA2Agq1yxubDkByCjYCM31vJUDHWO0cOW15fcxpRrLPwCghdFqKct9BrbWR5M/Tjtfjw9V04LYU9I1lZCCNCDcHxE29uxuCqIzIxT+7Zrq2oK9Q3LrKdx3sHiEUsgFRQntDl0ZV1Bup1Pwna8ww/9My7aZeLXSNwjiKumSoAyMLMDe1tb3troftOLxvhPsWBVsyMTY81P5WHkRY8/QyLwmuVbITodRY8xyHnOtiqgJyMfdcBSb7EfCw8rzXHeOXHSLzPur9okKY7VQqWU7qbQKJ0MTuFTWXjshh71UH7Q+8qGDSaH2AoXrp5j6S4yz6X3t5WyYCp4qF+ZE854oanzm996dbLhQv5mH01mDYzeTOoud1ChgQyIpViUCLDyxaLFlYjNMIgiPMI2ywBkiHCtBGRMSYqIJhQEcWNxQMQO2iDDDROaMCMAi9IpVEQJEEWpEfVV6CARgIbmy/vfYf1+0nUaSE2tv4yDjGuxA2X3R5Dn6xbMysIQCHAFUmIIsbayxuHWmtRcVh2IsfZqxD/AMLLY+hleoUszW2852MTTpezC5KgqaC7MpQDc5QFBFyb6kzPPW418e9cO1wrtFiKrJSQDO10LAbo7IWFv8v1MtfaPtXiMLjK6CnmYimqgg6KEFmXwJv9ZQuzFQ08TTdL/Gum+nOaF3m8GD4mnXdytOrSCXsxCuua18utiGBt4GcuWGEy64dMyysnzyy7itOolT2jUWpZmLKCpC3vchSdCJKx73RWHgQZH45g3osEZ86EZ0ys5QA8xmA106R7Ce/RA16fK86faVzX6rCMUMyJUHMBW0/EBp8x9pHWSMGbhqZ56jzXUfr84a0ZpjfZlkk4JZp/dvh71M3QGZxgac17u4w9lZvACa/5rHLmyOV3v4jSkn7x+wmOYkazUe9irmxCL+VPuZmWJQ3i9ovFDtFqIRQxSrEopYbQZYRiA4kxUQ0AaggvBGEeJMVaIMKAhwoJIKhGFBGAgggiBQgvAIIA7TYi7dNvM7frGYtzoB6n12+kRAwgvCMEAncPrBCbgG+mo+07GUMjMbAW9Bp9TOHhkvadh/gC6ADU+J5ecx8k5dHjv9eXQ7JcVoYeulSope3IbLfS+2pG83JqdDH4VQDdGF1YWzKwvlYX9R6kTz/wrgucF2dUVSAb7jMbAnkBfrNm4b2YTD0krYU1GdSrFWqZgyEe8gA93S5YW3MwzuMy45+yubJvj4rN+8XghoFCz5m1QplChcuoYW0IIMq/CKgtbnm+9v5Ga53w8P8Aa4RMQmopsC37ji1/QkfOYxw9rMT0t95t45/TW+meeW8t/KTUOSp0s14pcTlYqRsSIWOHvA9RGGHv+Ol/Owm2E2yyWPhtQE7Ta+xFIChfr+kxThFK5HmJvPZqllwyeV5plxGE5yZF3oYn/Fv4ACZ9UxGsuPeM+bFVD+0RKI8eUXj0m08SltYv26TmQhM1J1TEDlGfbmR4Iwk+2j1N1O5kEQ7wDoZF6wTn3MEABiDHiIkrGDUO0dRIt0sItBHhQzCiAWilW8ITpcEw4evTQ7O6KfJmAP3heIEnhnZfGYgZqOHquv5lQ5f4jYH5zoL2C4iWUHCVRmYC5XRbm1yQdAN56Vo0VRVRFCqoCqo0AA0AETi6oRHc7IrMfJVJ/SLdPTyPiUs7DoxHyNv0jEkYg3YnmSSfXWM2jgJtCi7RJgHQ4eNbWuftHDTdmIG+3PXyk3sl7I1bViwQ2F1F7k6a+G506TTMd3f03pipSqEWsdVN2Rj7py7hvCc+efpybYzcU7gXY6rVIzVlphrXupcWIBsbHfUabzQaWAx3DkziolegGXMPeDqjMPeCkHa/U6E6RrgfZazWarlIJR0AByZWUoFNzocu/wCyTL9SwhylGOZSCDfW46fK3ynPvLO3fPx7aa5WYySftyO1mF9tga9MWBak5XXS4Fx6XE804drN6Geou0dNVwlW7FQlJ2zC1wERiRrpqAR6zywG1BnT4cbNyufKzh1ycwUc7xql7zk+M6XA+FviHCICTlJv0AGh+olv4d3cVdCSB95rjlJUZVzeAUbuo8RN1wKZaKjoso3CuxT0mDFgQNdpfHU5LDfLYfKaZZSySMsZd2vPfbg3xFQ/tn7ymOJrXH+weLquzqFOYk7zgnuwxxPwL53hlnLe1YyyKDaFaXnE92uNQXyX8jeV/iXZ2vRF3QgeUmZSqcUwRZWJtGBQ4YSKCGANwRWWCAOGEYplhESgNBHao0jdMR6uNIggGCAwRAYlh7D082Owy/8A6p9GB/SV4S292lPNxHCj9u/8KM36Scug9LGVjvF4gKPD65vYuvsl6kvobf5cx9JZ5jne7xf2tVcOpBSlq1j8VVhsP3V0/wAxk1TJn1MTkkh6djaE+glyjSO20ZEUzXiIEn8PxhpsDqLEEEaag+E07s52+Ko6VCXNwym99LnMp52F7gjUTJRrDViDcG1pnn45kqZabXw7tLRFRCMxNQstQ/izjVHB002uSNidtppvD6wdA4vZrkXGtr6G08q4biLqwYm9tdddvDadjiHbnHVU9ma7Kma9k9w9AuZbG1uUyx8Nxy3OlZZ+qNE73e2SLT/sWHqAuxIrlbMFTKR7O+2Yk621AHjMU5w2aEs6JNM7W29zGGoth6jjWqHCuCPhS10t1B19RNRRAJgvdFxtaGLKVGKrWXJqbIG3Ut010v4zdMZiQg1mdmrT2XWqgaX1JsI5UcAC+0rvC6btWLOfd/CP6TscVb3LGVpG97o6vEKaglnAA6mKw+NpuLo4byMzvtZRVqbBSbkcj4yiYatiaDg03byuZnuqmT0PpOF2g4AldCLb/fwjPY/iz1qS+0+PnLJHjdn2809rOzD4ZySpyk6Hl/QysET1ticGlRSrorqRYhgDeYn3ldiFw7Cth1IRviTcA+E0mSemaXMGYx7+zt+Uxt0I0IlgLwQWgjB1xEsItolowOiIvFbRNAReMMQQDBAYIgMS9d0NO/EqX7K1G8rU3F/qJS8Jhy7BQbcyx2VebHwndqcYFFDQw10QizuNHrEc3O4TogNhzuZNvscjSO83teVqLRw2IVlyN7Rabah77Mw30toDpY35THMRiGdizG5O5PPwiatYmNkwmOuRaWlVhsTAzM2+sQIYMoGzFP16/eJM63ZzALiKwoO+QPs5FwjDYkXFx1ivE2J8ORFZpLx3DqlJ3p1FyvTYqw6Ec/EePiJG9k3Tw+l4tjVIEWi3NoXszOnwLhNXEVClNGdlRnKqLnKtgTb1HzhbqCRzcsSJ1q3DWU2sQbagixnMqUypsYY5S9CzR7DNYzYuzHbNqiotcqXRQMz+7mAsAbj8UxvD7y1cITaVcZkm3Td+DYkVDmXax5g6+cgdvMeaVG67naF2CpWpEzi961eyIt+sJjq6+Gdu8fzWY4ztJULHOb6zr9nuLU3cZreso+Pe5Hl+ukawuIKMGBkZ4SxpI9PcEpoEDLa5G4nXVwZk3ZPjVYJ7huB11kzhnavFNivZuBkJA0G15hL6VytPvIvEMElVMji439Y7SNwDHZp3Aqb9isMbnINZw+Nd29J/g92aORE2k60emOf+mTdR8oJsJSCG8vkaeTWiWMNzG2M6kJGHgxoiaBh4wxBCMcpIDqxsB03PgIhVuQBzNo5X+Kw2GgkmknFkAhAEXS4GpNtszHfeM1HvvGg0cpi8WtHs0YUedP8AtGmW3lGWgEcKaRDDnJA1AMLTkRislcMxJpVUcbo6ttcaEGxHMRhhrExXmaLpt/azs0mOprjsMyM4p2qBR/8AKgW4PXOBcWO4FuQmRVsOUYqfCx8tj8pqXc7xMhGQn3QcpHS5LA25c5F7zuzApOMRTX+7qE3A/A51I8jqR6jpObHLW58cNe2acRSwVhz387TTe5XDXxOJqW+Gkij/ADsp/wCiZ7i0zUD1Rr+l7H7zWu5SiPYV35s9Mfwpf9ZpLuQsl045wKhiKZFWkrMASrgAOrZTYhhr6bbTzDiwc7X5G3ynrVtj5GeUuJoBXqDo7feVjxU0xSTWWjgw1E4FBb/eWPgq6rN8WObbuySWw6+MpPeVTNSoEzZQAbk7XtoJoPA6eWgg8Jl3bzFA138D9bGLfdhYzqVl3FMM6OVdbE6jmCvIqeYkIS44yolWiPa3sGChh8SXNrjw6icKnwd/bGmRqDuNmH4WHgRY+syme+21x00Tu5S6ZTLunCkWpnA1uNfKcbsrws0UBO/Pwnep4rnOXK7oiyYY+6I9Odw3EZhOjNsLuGERFxsmOgcEK8EA8ksYhjDJiGM6UHqJhYkwUYWI3iAYMe+PAE/SKxdAqR0PON4c6nyM6VJgylW2I67dD6TO3V2qTccgGOI9jBXpFWKn59R1jUokuoY0+0coe9pGdtIodJJ0j+HcWtI/hApsY6UukhhrEOIaveB4lVofc1iwMS9M7vTOXxZDmAHjlzzZ+I8NTE0Hw76q66Hmp3VvMEAzzT2U4gcPiqNUG2SohP7txmHqpYes9SKeYAynUG/Xwtta3zmOWMmW/kS8PN/EcA9GpVoOLMM6MPEcx4HQjwImpdyw/wAC5tvWIv1siSH3s8GAyYxRzVKnn+B/+n+GdDua/wDoN/x3/wBKQk0q3cXxz7reR+08q8Z0xNW2wqP956ixlTLTduit/pM8scSb++qH9t/9R6Ssecv0i9JGDF9Za+z1K7qPESt4AXt1l17JUL1U87fKb49svJ02XDDLSXwX9JhfbLFXrOb/AIyJueKOWk3gp+087dp616rfvtFOZR/qfhCrOCgW/wATjTyN7/SaF2awKVCtU2uqqu/QafQzMKdQlgdLDQS4cB4+tBGL5ilgDaxsbgBrTl8mN9m/caJjcWqjKp058ryB/bhtK3j+I51DoSVIuDr+u0g0sYxYazOY7RdtX4A/u36ywK0ofA+KgKNdhLHhOKKx3l45a4OV2iYyzRIrXEaepHllFSJGaFGg8ENh5OMQ0O8S066zO0DrBiDrBRMFeIEUTr85Ip1LSKm4jj9IqqV0c9OoLOQp/CRuP5ic7EUCpsdjsRsRGZKoYnTK2q9DF10N7R0cg3ElYgAgOOeh8DEVqAGqm46fiHn4eMTQq20Ox0MPuPtTTREeqLY25deojMZHEMcbb+cbQxTNeI4Oi1mB8Z6h7H4r22Bwzk3PskUnnmT3W/0zy2s3juX4gzYV6bNcJUsg5jMuYjyNmPoZGeuNnF341w5cTh6uHbQVEIB6NurejAGU/udDLha1NxlZMQysvNWCIGB9QZfnHScXgtFUxGJyixqeyqOOQqFWVreBCK3rI3qyDXB/tC5XC1iL3yNtvqZ5dxLXdz+033M9MdsmAwdQdRb7n9J5lqH3z5n7yvH9VF6dLhj2M03sJhs1ZD0ma8NSbF3bYbdjyE6Opawy54XPjr5aDn9kzzd2iq3qNy1N/Wehe2NXLhnPh+k84cae7t5wx+lX+kfDOvMgeZtHXxlgQDmB3vt8pzSYczuMtaepbey3FWdjSqMCraKT+E8tenh4zpYo5CQOR3lO4biwji+glufEpUXMpGYC9r7i2467GZZY6yO8zZ1OJFRYGdHhnHWDgXlLxGKsbSIOIlTpFcNp09D8Nx6uoOaIx3F0Tdh1mIYDtQ6aZiJJxXH3cbzL+LLfKvU1f/zdSGl4Uwyrjnv8UE0/h+425USYcTOlB6kYKmsFKJdoASbwwdYlTEkxGN1IOsIRz2lxYi/Q8xCC9CPtACRyNjaLuG8G68j59IRpt+X/AH6RGkAeUXBU7jaRzHVcjxjbbxGKLzREEZHLzUu5jH2qVqA+J0V1/epEm3qGI+cyq8tndzjvZY6g1wPfyknazAqfoZn5J/VU7elKbhgCNmAPoZUuxrs+Ixbkg3cDTlZ6gAPoJYsFV9+pTO6MCNPwOMy/82cekrXYKoXbGPYj/EEDyAJtsOv1mFu8p+1TiVI7xHthG1tdrfNWtPNx3PnPR3eWL4CppezJ572uPHWedMvvfKb+LupvTscKX9JuvYDD5aObrMa7PYNndVRSxJ0AF7mb72dwRpUVVhY8xN8rrFhOco4veLXy4a3Uzz1xB7ufObp3qswoqQDlvqeW20wTFNcmE4xip9VMwsp6H5QrxS3JsPvb7yFnRQJ1sR/vxkvC4dxYi4N9DeRhQYHVrW8zJuBxNvdZswOwI2PnJyt1wqQXFVykHbML26Hn9Zyi06fFwbL5m30nLhj0V7KVos1j1jUEpJeaCIggBwo/VG5EjwB+jG3MXSjbxgQgMKAxGEMQoIA6rmO+1vvY+cjQXi0cqVkU7C3lEvh+n1jIqGGHY84ap7hLLaJj2p3sYhkI3ENlYSJM4ZWKVEYbhgZFKG17Q6TWYHoYWbg6r07V4kqewxDbVMOQbEWzKntF+7j1kHu0pkYMu271qjHxsQuvyMqfF+Lj/wANwig3ZSwt1WmcuvhYy8dh0UYGlkDZSHYZrE+87HW048fqaXpD7zX/APb6niyD/mnng/H8vtPQXejTJ4e5GmV0PTQ3XbnuNJkmE7C4p0FV8lFGVWBqsVZlP5VANz4G03wzmPNqfTcuIvHc7SRmqObF1RQPAMbMR9B6zWBMJwnH6GBVBhlvVU/3jv8AjFveWwNgp6S54bvWwhS9RKqNbUKEdT5HMD8xNJfXNxncfRdVa+02GR8NXV7ZfZObn8JVSQfQieXMQdTNP7dd4b16Hs6FJ6dKpmBqVLZqgU2ZVsbAX31JmWFSTKnEKTkiGrR5SediPnFMB+UW6xbXounVV/dbQ8m/nCZCGytoRz/rGrL4j6yUrhgFPLQHp/SK8HOS8bUzUxfcEfqJzJOqqMpHMa/XlIQWE6FFBARClJHBCggDp+GNQQQB2nEtBBAiIIIIGEOCCACFBBABAIIIA8sVBBEos/pANj5/pBBFTT8dWb3BmNrNpc2nQTi2ITD01SvVUe9otRwN+gMEExvQSBxWu5VXr1XUvSurVGZT7w3BNpsvFkBwVQEAj2Z0IvyggnN5u5+2/j/7HnfH/G3mZHggno49ObP6qsFXXBJfXK1XLfXL73LpK4N4IJGPdO9QOfrHDBBKKEVIE39IIID3SfwnykUwQRQ6SYUEEpIoIIIB/9k=" width="200px"></img>
                    </>:
                type == "people"?
                    <People APIDetail={APIDetail}></People>: type == "planets"?
                    <Planets APIDetail={APIDetail}></Planets>: type == "films"?
                    <Films APIDetail={APIDetail}></Films>: type == "starships"?
                    <Starships APIDetail={APIDetail}></Starships>: type == "species"?
                    <Species APIDetail={APIDetail}></Species>: null
                }
            </div>
        </>
    )
}

export default APIResult;
import React from 'react'
import { FaBolt, FaUniversity, FaArrowsAlt } from "react-icons/fa";

function Features(props) {
    let lang = props.lang
    return (
        <div className="container text-center mt-5" id="features">
            <h2 className="whitext heading-sub-title">
                {lang === 'English' ? "International community" : "Comunidad Internacional"}
            </h2>
            <h2 className="ctatext heading-sub-title">
                {lang === 'English' ? "Descentralized Global Ecosystem" : "Ecosistema Global Decentralizado"}

            </h2>
            <p id="subtitle">
                {lang === 'English' ?
                        "XTRON is a Smart Contract based in hybrid marketing. This is an innovative and descentralized app which provides you with powerful tools to make money using your smartphone or PC."
                    : "XTRON es un contrato inteligente basado en el marketing híbrido. Este es un programa innovador y decentralizado que te brinda herramientas para generar dinero desde tu teléfono o PC."
                }

            </p>
            <div className="features_wrap mt-5">
                <div className="features_box">
                    <FaBolt size={50} color={'#fff'}/>
                    <br /><br />
                    <h2 className="ctatext"><strong>
                        {lang === 'English' ? "INSTANT" : "INSTANTANEO"}

                    </strong></h2>
                    <p className="text-justify">
                        {lang === 'English' ? "The contract delivers your benefits immediately and directly to your private wallet."
                            :
                            "El contrato te entrega tus beneficios de forma inmediata y directa en tu wallet privada."
                        }

                    </p>
                </div>
                <div className="features_box">
                    <FaUniversity size={50} color={'#fff'}/>
                    <br /><br />
                    <h2 className="ctatext"><strong>
                        {lang === 'English' ? "UNALTERABLE" : "INALTERABLE"}

                    </strong></h2>
                    <p className="text-justify">
                        {lang === 'English' ?
                            "Once it has been deployed on the Tron blockchain, it is impossible to tamper with or tamper with."
                            :
                            "Una vez ha sido desplegado en la blockchain de Tron, es imposible de alterar o manipular."}

                    </p>
                </div>
                <div className="features_box">
                    <FaArrowsAlt size={50} color={'#fff'}/>
                    <br /><br />
                    <h2 className="ctatext"><strong>
                        {lang === 'English' ? "DESCENTRALIZED" : "DECENTRALIZADO"}

                    </strong></h2>
                    <p className="text-justify">
                        {lang === 'English' ?
                            "The contract does not require or permit a central authority; all participants have the same rights."
                            :
                            "El contrato no requiere ni permite una autoridad central; todos los participantes tienen los mismos derechos."
                        }
                    </p>
                </div>


            </div>

        </div>
    )
}

export default Features

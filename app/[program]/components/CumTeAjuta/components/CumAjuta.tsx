import Checkmark from '@/app/make-me-fit/components/Checkmark'
import React from 'react'

const CumAjuta = ({ index, tip }: { index: number, tip: "retete" | "exercitii" | "progres" | "control" }) => {

    const text = {
        retete: {
            header: `VEI ÎNVĂȚA SĂ PREPARI <span class="font-bold text-primaryColor">PESTE 50 DE REȚETE</span> GUSTOASE`,
            content: [
                "Smoothie bowl cu fructe de pădure și granola",
                "Omletă cu spanac și brânză feta",
                "Budincă de chia cu lapte de migdale și banane",
                "Clătite proteice cu banane și fulgi de ovăz",
                "Paste integrale cu pesto de busuioc și roșii cherry",
                "Biluțe energizante cu unt de arahide și cacao",
                "Iaurt grecesc cu nuci și miere",
                "Terci de ovăz cu mere și scorțișoară",
                "Piept de pui la grătar cu piure de conopidă",
                "Smoothie proteic cu cacao, banană și lapte de migdale",
            ]
        },
        exercitii: {
            header: `VEI ÎNVĂȚA <span class="font-bold text-primaryColor">PESTE 100 DE EXERCIȚII</span> DE FITNESS`,
            content: [
                "Abdomene de diferite tipuri și profiluri de rezistență",
                "Ridicări de bazin cu bara, gantera, sau la aparat",
                "Plank-ul și progresii mai ușoare sau mai dificile",
                "Genuflexiuni de diferite tipuri și profiluri de rezistență",
                "Tracțiuni la aparat sau asistate prin echipament",
                "Flotări și progresii mai ușoare sau mai dificile",
                "Exerciții de coordonare pentru abdomen",
                "Ridicări laterale în diferite planuri de mișcare",
                "Îndreptări cu bara, ganterele, sau la aparat",
                "Extensii lombare cu kettlebell sau discuri de greutate",
            ]
        },
        progres: {
            header: `VEI ÎNVĂȚA SĂ FACI <span class="font-bold text-primaryColor">PROGRES ÎN SIGURANȚĂ</span>`,
            content: [
                "Flotări din genunchi",
                "Abdomene în plan declinat",
                "Lumânarea cu genunchii îndoiți",
                "Ridicări de bazin cu bara mică ",
                "Ridicări de bazin cu gantere",
                "Genuflexiuni cu propria greutate a corpului",
                "Tracțiuni la helcometru",
                "Tracțiuni asistate cu benzi",
                "Tracțiuni asistate la aparat",
                "Ridicări ale genunchilor din atârnat"
            ]
        },
        control: {
            header: `VEI REUȘI <span class="font-bold text-primaryColor">SĂ-ȚI ȚII SUB CONTROL</span> GREUTATEA`,
            content: [
                "Cum să strecori câte un antrenament în ziua ta",
                "Ce să faci ca să ajungi totuși la sală când nu ai chef",
                "Cum să-ți găsești mereu energia pentru antrenament",
                "În ce măsură te poți abate de la plan fără să-ți pierzi progresul",
                "Cum să faci față tentațiilor și să le faci loc doar periodic",
                "Cum să-ți găsești încrederea în tine că poți reuși",
                "Cum să te organizezi ca să poți mânca sănătos în fiecare zi",
                "Cum să faci să adori fiecare clipă în care te antrenezi",
                "Ce vei avea de făcut după parcurgerea programului",
                "Care sunt alegerile ce îngrașă multe femei"
            ]
        }
    }

  return (
    index % 2 
        ?
        <section
            className="flex items-center"
            style={{
                margin: "0 var(--body-margin)",
                height: "var(--cum-te-ajuta-height)",
                width: "var(--cum-te-ajuta-width)",
                gap: "var(--cum-te-ajuta-grid-gap)"
            }}>
            <div
                style={{
                    width: "var(--program-width)",
                    height: "100%",
                    backgroundColor: "#ABABAB"
                }}>
            </div>
            <div>
                <h4
                    className="make-me-fit-preview-program-h4 font-bold uppercase" 
                    dangerouslySetInnerHTML={{__html: text[tip].header}}
                    style={{
                        fontSize: "var(--h4-size)",
                        marginBottom: "var(--cum-te-ajuta-header-mb)"
                    }}>
                </h4>
                <div
                    className="flex"
                    style={{
                        width: "var(--program-width)"
                    }}>
                    <div
                        className="grid grid-cols-[auto_1fr]"
                        style={{
                            columnGap: "var(--program-grid-gap)",
                        }}>
                        {text[tip].content.map((perk, index) => (
                            <div
                                key={index}
                                className="flex"
                                style={{
                                    marginBottom: "var(--cum-te-ajuta-perk-mb)",
                                }}>
                                    <Checkmark src="/Checkmark icon web.png"/>
                                    <p
                                        className="make-me-fit-heading-lp-p"
                                        style={{
                                            fontSize: "var(--p-size)",
                                            maxWidth: "var(--perk-width)"
                                        }}>
                                        {perk}
                                    </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        :
        <section
            className="flex items-center"
            style={{
                margin: "0 var(--body-margin)",
                height: "var(--cum-te-ajuta-height)",
                width: "var(--cum-te-ajuta-width)",
                gap: "var(--cum-te-ajuta-grid-gap)"
            }}>
            <div>
                <h4
                    className="make-me-fit-preview-program-h4 font-bold uppercase" 
                    dangerouslySetInnerHTML={{__html: text[tip].header}}
                    style={{
                        fontSize: "var(--h4-size)",
                        marginBottom: "var(--cum-te-ajuta-header-mb)"
                    }}>
                </h4>
                <div
                    className="flex"
                    style={{
                        gap: "var(--program-grid-gap)",
                        width: "var(--program-width)"
                    }}>
                    <div
                        className="grid grid-cols-[auto_1fr]">
                        {text[tip].content.map((perk, index) => (
                            <div
                                key={index}
                                className="flex"
                                style={{
                                    marginBottom: "var(--cum-te-ajuta-perk-mb)",
                                }}>
                                    <Checkmark src="/Checkmark icon web.png"/>
                                    <p
                                        className="make-me-fit-heading-lp-p"
                                        style={{
                                            fontSize: "var(--p-size)",
                                            maxWidth: "var(--perk-width)"
                                        }}>
                                        {perk}
                                    </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: "var(--program-width)",
                    height: "100%",
                    backgroundColor: "#ABABAB"
                }}>
            </div>
        </section>
  )
}

export default CumAjuta
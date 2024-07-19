import React from 'react'
import "./Acne.css"

const Acne = () => {
    return (
        <div className='Acne' id='Acne'>
            <div className="acne-candt">
                <div className="acne-concerns">
                    <h2>Acne Concerns</h2>
                    <p>Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples.
                        Acne is most common among teenagers, though it affects people of all ages.
                        Effective acne treatments are available, but acne can be persistent. The pimples and bumps heal slowly, and when one begins to go away, others seem to crop up.
                        Depending on its severity, acne can cause emotional distress and scar the skin. The earlier you start treatment, the lower your risk of such problems.</p>
                    <p>Acne signs vary depending on the severity of your condition:</p>
                    <img src="./acne-types.jpg" alt="" />
                    <li> Whiteheads -closed plugged pores</li>
                    <li> Blackheads -open plugged pores</li>
                    <li>Small red, tender bumps -papules</li>
                    <li> Pimples -pustules, which are papules with pus at their tips</li>
                    <li>Large, solid, painful lumps under the skin -nodules</li>
                    <li>Painful, pus-filled lumps under the skin -cystic lesions</li>
                    <li> Acne usually appears on the face, forehead, chest, upper back and shoulders.</li>
                </div>
                <div className="acne-treatments">
                    <h2>Acne Treatment</h2>
                    <img src="./Acne treatment.jpg" alt="" />
                    <div className="mild-acne">
                        <h3>Mild Acne</h3>
                        <p>You can use over-the-counter (OTC) medicated creams, cleansers, and spot treatments to help address pimples as they pop up.</p>
                        <li>Benzoyl peroxide. This ingredient helps dry out existing pimples, prevents new ones from forming, and kills acne-causing bacteria.</li>
                        <li>Salicylic acid. This ingredient helps exfoliate your skin to prevent pores from getting clogged with acne-causing bacteria.</li>
                    </div>
                    <div className="moderate-severe">
                        <h3>Moderate to Severe</h3>
                        <li>Retinoids (vitamin A derivatives): Retinol, such as Retin-A®, Tazorac® and Differin®, which is available without a prescription, breaks up blackheads and whiteheads and helps prevent clogged pores, the first signs of acne. Most people are candidates for retinoid therapy. These medications aren’t spot treatments and must be used on the entire area of skin affected by acne to prevent the formation of new pimples. You often need to use these for several months before noticing positive results.</li>
                        <li>Antibiotics: Topical antibiotics like clindamycin and erythromycin control surface bacteria that aggravate and cause acne. Antibiotics are more effective when combined with benzoyl peroxide.</li>
                        <li>Dapsone: Dapsone (Aczone®) is a topical gel, which also has antibacterial properties. It treats inflamed acne.</li>
                    </div>
                    <div className="Acne-therapy">
                        <h3>Additional acne therapies</h3>
                        <li>Steroids: Steroids can treat severe acne with injections into large nodules to reduce inflammation.</li>
                        <li>Lasers: Lasers and light therapy treat acne scars. A laser delivers heat to the scarred collagen under your skin. This relies on your body’s wound-healing response to create new, healthy collagen, which encourages growth of new skin to replace it.</li>
                        <li>Chemical peels: This treatment uses special chemicals to remove the top layer of old skin. After removal of the top layer of skin, new skin grows in smoother and can lessen acne scars.</li>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Acne

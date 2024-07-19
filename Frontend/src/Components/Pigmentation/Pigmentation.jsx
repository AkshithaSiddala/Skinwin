import React from 'react'
import "./Pigmentation.css"

const Pigmentation = () => {
    return (
        <div className='pigmentation' id='pigmentation'>
            <div className="pigmentation-candt">
                <div className="pigmentation-concerns">
                    <h2>Pigmentation Concerns</h2>
                    <img src="./Hyperpigmentation.jpg.webp" alt="" />
                    <div>
                        <p>Hyperpigmentation causes patches of skin to become darker than the surrounding skin.
                            It occurs when the skin produces excess melanin, the pigment that gives skin its color.</p>
                        <p>Hyperpigmentation is very common on skin of color, as darker skin tones already have a higher melanin content.
                            Burns, bruises, acne, rashes, or other trauma to the skin can cause it to produce more melanin and lead to dark spots. </p></div>
                    <li>Types of hyperpigmentation include:</li>
                    <li>age spots, also called “liver” spots</li>
                    <li>melasma</li>
                    <li>post-inflammatory hyperpigmentation</li>

                    <li>Sun Exposure: Prolonged exposure to the sun's harmful UV rays can stimulate melanin production, leading to the development of sunspots or age spots.</li>
                    <li>Genetics: Some individuals are genetically predisposed to certain pigmentation issues.</li>
                    <li>Hormonal Changes: Hormonal fluctuations during pregnancy, birth control use, or menopause can trigger melasma.</li>
                    <li>Ageing: As we age, our skin undergoes natural changes, and one of these changes can be the development of age-related pigmentation issues. These may include age spots and an overall uneven skin tone.</li>
                </div>
                <div className="pigmentation-treatment">
                    <h2>Pigmentation Treatment</h2>
                    <img src="./pigimage.jpg" alt="" />
                    <div>
                        <p>A dermatologist can diagnose the cause of your hyperpigmentation. They will request your medical history and give you a physical exam to determine the cause.
                            In some cases, a skin biopsy can narrow down the cause.
                            Topical prescription medication can treat some cases of hyperpigmentation.
                            This medication usually contains hydroquinone, which lightens the skin.
                            However, prolonged use of topical hydroquinone (without any breaks in use) can cause darkening of the skin, known as ochronosis. So it’s best to use topical hydroquinone only under the care of a dermatologist so that they can properly guide you on how to use the medication without any adverse effects.
                            Using topical retinoids also assists with lightening dark spots of the skin.
                            Both of these medications can take a few months to lighten darkened areas.</p></div>
                    <li>Laser treatment for hyperpigmentation: Being an invasion-less therapy, this procedure uses lasers aimed at pigmented melanin to break them down, consequently reducing the face dark spots on the face.</li>
                    <li>Chemical Peels for Hyperpigmentation: A chemical peeling is applied on the skin in this case, which sloughs off the top layer and stimulates the growth of a new   fresh skin layer that will be even toned.</li>
                    <li>Microneedling for Hyperpigmentation: Here is the procedure in which small needles create tiny breaks in the skin where collagen production can thus head up and pigmentation gets reduced.</li>
                    <li>Topical Treatments: Among the best remedies for hyperpigmentation, there exist products featuring some ingredients such as retinoids, vitamin C and hydroquinone that can help to lighten the dark spots and thus result in evenly toned skin.</li>
                </div>
            </div>

        </div>
    )
}

export default Pigmentation

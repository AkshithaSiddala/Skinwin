import React from 'react'
import "./Home.css"
import { HashLink as Link } from 'react-router-hash-link'



const Home = () => {


    return (
        <div className='Home'>
            <div className='Header'>
                <div className='header-contents'>
                <h2>Unlock the secrets to radiant skin with our specialized dermatological expertise</h2>
                <p>Where science meets beauty: Explore innovative solutions for all your skincare needs.
                    Transform your skin journey into a tale of confidence and beauty with our personalized care.<br/>
                    Because every skin has a story. Let us help you write yours with confidence</p>
                    </div>
            </div>
            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="Acneimage.jpg" alt="" />
                            <div className="image-info">Acne</div>
                        </div>
                        <div className="flip-card-back">
                            <div className="additional-info">Acne is a skin condition that occurs when your hair 
                            follicles become plugged with oil and dead skin cells. <Link smooth to= "/Concern&Treatment#Acne">More</Link></div>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./pigmentation image.jpg" alt="" />
                            <div className="image-info">Pigmentation</div>
                        </div>
                        <div className="flip-card-back">
                            <div className="additional-info">Skin pigmentation describes the color of your skin due to the amount of melanin it contains. Genetics, skin damage, sun exposure, and hormones ... <Link smooth to= "/Concern&Treatment#pigmentation">More</Link></div>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src="./Anti-ageing.jpg" alt="" />
                            <div className="image-info">Ageing</div>
                        </div>
                        <div className="flip-card-back">
                            <div className="additional-info">In humans, ageing represents the accumulation of changes in a human being over time and can encompass physical, psychological, and social changes. <p>More</p></div>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src="./Sunburn.jpg" alt="" />
                            <div className="image-info">Sunburn</div>
                        </div>
                        <div className="flip-card-back">
                            <div className="additional-info">Sunburn is red, painful, damaged skin from being out in the sun for too long. When you get a sunburn, ultraviolet rays from the sun. <p>More</p> </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src="./Eczema.jpg" alt="" />
                            <div className="image-info">Eczema</div>
                        </div>
                        <div className="flip-card-back">
                            <div className="additional-info">Eczema , also known as “atopic dermatitis,” is a noncontagious, inflammatory skin condition that is characterized by severe itching, redness, oozing, and scaly rashes. <p>More</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home

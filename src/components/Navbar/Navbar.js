import React from 'react'
import img from '../../Image/chip.png'

function Navbar() {
    return (
        <div>
            <section>
                <div class="card">
                    <div class="face front">
                        <h3 class="debit">Debit Card</h3>
                        <h3 class="bank">Bank Name</h3>
                        <img src={img} alt="" class="chip" />
                        <h3 class="number">0123 4567 8901</h3>
                        <h5 class="valid">
                            <span>Valid<br />thru</span>
                            <span>10/23</span>
                        </h5>
                        <h5 class="cardHolder">Mirsolih Mirzaahmad o'g'li</h5>
                        <div class="face back">
                            <div class="blackbar"></div>
                            <div class="ccvtext">
                                <h5>Aoutorized Signature-not valid unless signed</h5>
                                <div class="whiteBar"></div>
                                <div class="ccv">123</div>
                            </div>
                            <p class="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar

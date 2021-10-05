import Header from "../components/Header";
import HeaderImg from "../components/HeaderImg";
import Photos from "../Components/Photos";

const Index = () => {
    return (
        <div>
            <Header />
            <HeaderImg />
            <div className='shopItem'>
                <Photos />

                <div className='description'>
                    <div className="descriptionText">
                        <h3>Футболка с логотипом</h3>
                        <span>Футболка с логотипом тут какое-то описание вещи должно быт</span>
                    </div>
                        <div className='colorAndSize'>
                            <div className="color">
                                <span>Цвет: белый</span>
                                <div className="colors">
                                    <div className="color__item"></div>
                                    <div className="color__item"></div>
                                 </div>
                            </div>
                            <div className="size">
                                <span>Размер: </span>
                                    <div className="size__item">XS</div>
                                    <div className="size__item">S</div>
                                    <div className="size__item">M</div>
                                    <div className="size__item">L</div>
                                    <div className="size__item">XL</div>
                                    <div className="size__item">2XL</div>
                                    
                            </div>
                        </div>
                    <div className="cost">999 &#8381;</div>
                        <div className = "count__and__button">
                            <div className='counter'>
                                 <div className = 'counter__button minus'>-</div>
                                  <input value='1' className='counter__input' />
                                  <div className="counter__button plus">+</div>
                             </div>  
                            <div className='counter__addToCart'><button id="addToCart">В корзину</button></div>
                        </div>
                        <div className="detailedDescription">
                    Состав: 100 % хлопок<br/>
                    Страна производства: Россия<br/>
                    <p>&nbsp;</p> 
                    Рекомендуемый уход за изделием: <br/>
                    — Стирать в теплой воде (до 40 °С), машинный отжим не допускается.<br/>
                    — Гладить при средней температуре (до 100–150 °С).<br/>
                    — Не отбеливать.<br/>
                    — Не подвергать химчистке.<br/>
                    </div>
                    <div className='sizeTable'>

                    </div>
                </div>
            </div>




            <style jsx>
                {`
                    .shopItem{
                        width: 1240px;
                        display:flex;
                        justify-content:space-between;
                        margin: 66px auto 0;
                    }

                    .colorAndSize{
                        display:flex;
                        margin-top:45px;

                    }

                    .colorAndSize .colors{
                        display:flex;
                        
                    }
                    .color .color__item{
                        margin-left: 10px;
                        width:32px;
                        height:32px;
                        background-color: gray;
                        border: 1px solid black;
                        wrap:no-wrap;
                    }
                    .colors div:first-child{
                        margin-left:0;
                    }


                    .description{
                        max-width: 640px;
                        width:100%;
                    }

                    .descriptionText h3{
                        font-family: Helvetica Neue;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 26px;
                        line-height: 31px;
                        color:#BB423D;
                    }

                    .cost{
                        margin-top: 50px;
                        pading: 5px 0;
                        font-family: Helvetica Neue;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 26px;
                        line-height: 32px;
                        color: #333333;
                        border-top: 1px solid rgba(163, 163, 163, 0.82);
                        border-bottom: 1px solid rgba(163, 163, 163, 0.82);
                    }

                    .sizeTable{
                        width: 120px;
                        height: 150px;
                        background: #F7F7F7;
                    }

                    .count__and__button {
                        margin: 50px 0 0 0;
                        display:flex;
                        justify-content: space-between;

                    }
                    .counter{
                        display:flex;
                        border: 1px solid gray;
                        border-radius: 5px;
                    }
                    .counter__input{
                        padding: 10px 15px;
                        max-width: 45px;
                        border: 1px solid gray;
                        border-top:none;
                        border-bottom:none;
                        
                    }
                    .counter__button{
                        padding: 10px 15px;
                        max-width: 45px; 
                    }

                    
                    .counter__addToCart{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        width: 245px;
                        height: 46px;
                        border: 2px solid #BB423D;
                        box-sizing: border-box;
                        border-radius: 3px;
                    }

                    #addToCart{
                        background:none;
                        border:none;
                        color: #BB423D;
                        font-family: Helvetica;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 16px;
                    }
                    
                    .detailedDescription{
                        margin-top:65px;
                        font-family: Helvetica;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 17px;
                        line-height: 20px;


                    }


                `}
            </style>


        </div>
    )
}

export default Index;
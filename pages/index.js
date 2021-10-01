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
                    <div>Color</div>
                    <div>size</div>
                    </div>
                    <div className="cost">999 &#8381;</div>
                    <div>
                        <div className="count">количество</div>
                        <div className='addToCart'> <button>В корзину</button>  </div>
                    </div>
                    <div className="detailedDescription">
                    Состав: 100 % хлопок<br/>
                    Страна производства: Россия<br/>
                    &nbsp;
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
                        justify-content:space-between;
                        margin-top: 43px; 

                    }

                    .colorAndSize div{
                        background-color: grey;
                        border: 1px solid black;
                    }

                    .description{
                        width: 640px;
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
                `}
            </style>


        </div>
    )
}

export default Index;
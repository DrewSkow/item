export default function Photos(){
    return(
        <div className='photos'>
            <div className="photoBig">
            </div>
            <div className="photoSmall">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <style jsx>
            {`
                .photoBig{
                    width:530px;
                    height:619px;
                    background-color: aqua;
                    border: 1px solid black;
                }

                .photoSmall{
                    width:530px;
                    display:flex;
                    justify-content:space-between;
                }

                .photoSmall div{
                    margin-top: 25px;
                    width: 160px;
                    height: 160px;
                    background-color: aqua;
                    border: 1px solid black;
                }
            `}

        </style>
        </div>


    )
}
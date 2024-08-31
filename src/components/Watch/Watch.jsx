const Watch = ({ watch }) => {
    const { brand, price, model } = watch
    return (
        <div>
            <img src="data:image/gif;base64,R0lGODlhAwAFAPMAADo4Nj49PWBLRpOQkaOfoKupqK6srbGvr7KurrKwr8jFxNHIxtHNzOTk4+vp6QAAACH5BAAAAAAALAAAAAADAAUAAAQLkAxTwFEhMYHcahEAOw==" alt="LQIP" />
            <h1>Name: {brand}</h1>
            <p>Price: {price}</p>
            <h3>Model: {model}</h3>
        </div>
    );
};

export default Watch;
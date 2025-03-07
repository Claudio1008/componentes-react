import estilo from './VideoCard.module.css';

function VideoCard() {
    return (
        <div className={estilo.videoCard}>
            <div className={estilo.videoThumb}>
                <img src="https://cdn.fliki.ai/image/page/660ba680adaa44a37532fd97/6663112070e1cfda27f86585.jpg" alt="thumbnail" />
            </div>
            <div className={estilo.videoInfo}>
                <div className={estilo.channelLogo}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazpOCLQHTS0gciqWm2sT7HZrUCHP9kKemdQ&s" alt="capa canal" />
                </div>
                <div className={estilo.videoText}>
                    <p className={estilo.videoTitle}>Título do vídeo</p>
                    <p>Canal</p>
                    <p>13 mi visualizações</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
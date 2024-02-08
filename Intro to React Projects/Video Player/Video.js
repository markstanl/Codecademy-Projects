function Video({src}) {
    return (
      <div>
        <video controls autostart autoPlay muted
        src={src}/>
      </div>
    );
};
export default Video;

import React,{useState,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function Content() {
    const [videoUrl,setVideoUrl]=useState("")
    const [id,setId]=useState("")

    useEffect(()=>{
        const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
        setId(id)
        console.log(id,'id')
    },[videoUrl])

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      const styles = useStyles();
    return (
        <>
         <Grid container spacing={24}>
             <Grid item xs={8} sm={8} md={8} lg={8}>
                 <div className="wrapper">
                    <form onSubmit={(e)=>e.preventDefault()}>
                    <TextField id="outlined-basic"
                      style={{width:'80%',marginLeft:'25px'}}
                       label="Paste video url here" variant="outlined"
                       value={videoUrl}
                       onChange={(e)=>setVideoUrl(e.target.value)}
                       />

                    </form>
                 </div>
                 <iframe src={'https://www.yt-download.org/api/button/mp3/' + id} style={videoUrl.length == 0 ? {display:'none'} : {width:'100%',height:'100px',border:'none' }}  scrolling="no" ></iframe>
                    

             </Grid>
        </Grid>    
        </>
    )
}

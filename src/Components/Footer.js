import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./Footer.css"
export default function Footer() {
    let date = new Date();
    let Fullyear = date.getFullYear();
    return (
        <div className="wrapper">
            <Grid container spacing={0}>
                <Grid item sm={12} md={12} lg={12}>
                    <div className="footer">
                    <Typography variant="h6" gutterBottom>
                        Made with love by SOFTAL {Fullyear}
                    </Typography>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

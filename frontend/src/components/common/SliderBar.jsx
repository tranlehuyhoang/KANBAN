import { useSelector, useDispatch } from 'react-redux'
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import assets from '../../assets/index'

const SliderBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { boardId } = useParams()

    const [activeIndex, setActiveIndex] = useState(0)

    const { user } = useSelector((state) => state.auth.userInfo);

    const sidebarWidth = 250

    const logout = () => {
        localStorage.removeItem('userInfo')
        navigate('/login')
    }

    return (
        <Drawer
            container={window.document.body}
            variant='permanent'
            open={true}
            sx={{
                width: sidebarWidth,
                height: '100vh',
                '& > div': { borderRight: 'none' }
            }}
        >
            <List
                disablePadding
                sx={{
                    width: sidebarWidth,
                    height: '100vh',
                    backgroundColor: assets.colors.secondary
                }}
            >
                <ListItem>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant='body2' fontWeight='700'>
                            {user.username}
                        </Typography>
                        <IconButton onClick={logout}>
                            <LogoutOutlinedIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </ListItem>
                <Box sx={{ paddingTop: '10px' }} >
                    <ListItem>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant='body2' fontWeight='700'>
                                Favorite
                            </Typography>

                        </Box>
                    </ListItem>
                </Box>

                <Box sx={{ paddingTop: '10px' }} />
                <ListItem>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant='body2' fontWeight='700'>
                            Private
                        </Typography>
                        <IconButton >
                            <AddBoxOutlinedIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SliderBar
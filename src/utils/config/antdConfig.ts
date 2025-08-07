import {  ThemeConfig } from 'antd';

const antdTheme: ThemeConfig = {
    token:{
        colorPrimary: '#0050B6',
        colorLink: '#0050B6',
        colorPrimaryBg:"#090b0e",
    },
    components:{
        Layout:{
            colorBgLayout:"#ffff"
        },
        Button:{
            boxShadow:"none",
        },
        Menu: {
            itemSelectedBg:'#0050B6',
            itemSelectedColor:"#fff", 
            itemHoverBg:"#004fb630",
            darkSubMenuItemBg:"#090b0e",
            itemBorderRadius:8,
          },
          Radio:{
            borderRadius: 10
          },
    }
};

export default antdTheme;
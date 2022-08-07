class Router{
    static Get(url,ventana){
        const Myurl = new URL(ventana);
        Myurl.pathname = url;
    }   
}


export default Router;
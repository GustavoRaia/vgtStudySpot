import "./Footer.css";

// Verifica se a tela foi estendida além do viewport
function verificarTamanhoTela() {
    var alturaViewport = window.innerHeight;
    var alturaPagina = document.body.scrollHeight;
    
    if (alturaPagina > alturaViewport) {
        document.querySelector('.barra-footer').style.position = 'relative';
        document.querySelector('.barra-footer').style.bottom = '0';
    } else{
        document.querySelector('.barra-footer').style.position = 'fixed';
        document.querySelector('.barra-footer').style.bottom = '0';
    }
}

// Chama a função verificarTamanhoTela a cada segundo
setInterval(verificarTamanhoTela, 1000);

// Chama a função ao carregar a página e ao redimensionar a janela
window.onload = verificarTamanhoTela;
window.onresize = verificarTamanhoTela;

const Footer = () => (

    <div className="barra-footer">
        <a href="https://vgt-developments.vercel.app" target="_blank">Desenvolvido por VGT Developments ®</a>
    </div>
);

export default Footer;
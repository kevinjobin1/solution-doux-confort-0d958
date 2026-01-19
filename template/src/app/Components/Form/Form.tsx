
const Form = () => {
    return (
        <div className="service-form">
            <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Posez une question</h2>
            <form>
                <input type="text" className="cs_form_field cs_mb_15" placeholder="Votre nom" />
                <input type="text" className="cs_form_field cs_mb_15" placeholder="Adresse e-mail" />
                <input type="text" className="cs_form_field cs_mb_15" placeholder="Numéro de téléphone" />
                <textarea cols={30} rows={3} className="cs_form_field cs_mb_15" placeholder="Écrivez votre message..."></textarea>
                <button className="cs_btn cs_style_1 w-100" type="submit"><span>Soumettre</span></button>
            </form>            
    </div>
    );
};

export default Form;
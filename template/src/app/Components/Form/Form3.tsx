const Form3 = () => {
    return (
        <form action="#" className="cs_contact_form">
            <h2 className="text-center cs_fs_36 cs_semibold">Demandez un devis</h2>
            <input type="text" className="cs_form_field cs_mb_22" placeholder="Votre Nom" />
            <input type="email" className="cs_form_field cs_mb_22" placeholder="Votre Email" />
            <input type="text" className="cs_form_field cs_mb_22" placeholder="Sélectionnez le type de besoin" />
            <textarea cols={30} rows={4} className="cs_form_field cs_mb_22" placeholder="Écrire un message..."></textarea>
            <button className="cs_btn cs_style_1 w-100" type="submit"><span>Soumettre</span></button>
        </form>
    );
};

export default Form3;
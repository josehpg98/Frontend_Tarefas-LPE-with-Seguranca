function CampoEntrada({id, label,tipo, name, value, onchange, requirido,
                        msgvalido, msginvalido, readonly, maxCaracteres}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={tipo} className="form-control"
                id={id} name={name} value={value}
                onChange={onchange} required={requirido}
                readOnly={readonly} maxLength={maxCaracteres}/>
            <div className="valid-feedback">
                {msgvalido}
            </div>
            <div className="invalid-feedback">
                {msginvalido}
            </div>
        </div>
    )
}

export default CampoEntrada;
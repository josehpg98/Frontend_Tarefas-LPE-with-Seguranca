function CampoSelect({ id, label, name, value, onchange, requirido,
    msgvalido, msginvalido, 
     children }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <select className="form-control"
                id={id} name={name} value={value}
                onChange={onchange} required={requirido}
                 >
                <option disabled="true" value="">({msginvalido})</option>
                {children}
            </select>
            <div className="valid-feedback">
                {msgvalido}
            </div>
            <div className="invalid-feedback">
                {msginvalido}
            </div>
        </div>
    )
}

export default CampoSelect;
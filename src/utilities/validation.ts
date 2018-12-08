export const validate = (rules) => {
    return (values, props) => {
        const errors = {}
        for (let field in rules) {
            let value = values[field]
            errors[field] = rules[field].map(validateField => {
                return validateField(value, values)
            }).find(x => x)
        }
        return errors
    }
}
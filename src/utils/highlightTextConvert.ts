// Convert text from highlight API
// @param pixels - Text to be converted
// @returns converted text

export function highlightTextConvert(text: string): string {
    switch (text) {
        case 'alert':
            return '* Meta longe de ser atingida'
        case 'success':
            return '* Meta do mês foi atingida'
        case 'warning':
            return '* Meta do mês quase alcançada'
        default:
            return '* Sem dados no momento'
    }
}

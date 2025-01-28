enum IPrefix {
    CREATE = 'create',
    EDIT = 'edit',
    SHOW = 'show'
}
enum IMethod {
    POST = 'post',
    GET = 'get',
    PUT = 'put'
}


export default function getPrefix(method: IMethod) {
    switch (method) {
        case IMethod.GET:
            return IPrefix.SHOW;
        case IMethod.POST:
            return IPrefix.CREATE;

        case IMethod.PUT:
            return IPrefix.EDIT;
        default:
            return IPrefix.SHOW;
    }
}
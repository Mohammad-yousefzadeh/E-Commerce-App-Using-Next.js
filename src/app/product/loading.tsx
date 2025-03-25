const ProductPageLoading = () => {
    return (
        <div style={{position : "absolute" , top : '50%' , left : "50%" , transform : "translate(-50% , -50%)"}}>
            <div className="spinner-border" style={{width : "3rem" , height : "3rem"}} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
}
 
export default ProductPageLoading;
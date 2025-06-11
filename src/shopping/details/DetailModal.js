function DetailModal({detailShowModal}){
    return (
        <div className={`detail-modal-container ${detailShowModal ? '' : 'show'}`}>
            <p>해당 상품이 카트에 담겼습니다.</p>
        </div>
    )
}

export default DetailModal;
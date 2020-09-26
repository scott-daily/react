import React from 'react';
import { connect } from 'react-redux';
import { deleteStream } from '../../actions';

const StreamDelete = (props) => {

    deleteStream(this.props.history.match.params.id);

    return <div>StreamDelete</div>;
};

const mapStateToProps = (state) => {
    return {
        deleteStream: this.state.deleteStream
    }
}

export default connect(mapStateToProps, { deleteStream })(StreamDelete);
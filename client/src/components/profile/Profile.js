import React, {Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile.action';

const profile = ({getProfileById,profile:{profile, loading},auth,match}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    },[getProfileById]);
    return (
        <Fragment>
            {profile === null || loading ? <Spinner /> : <Fragment>
              <Link to='/profiles' className="btn btn-light">Back To profiles</Link>
        </Fragment>}
        </Fragment>
    )
}

profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
        
});
export default connect(mapStateToProps,{getProfileById})(profile);


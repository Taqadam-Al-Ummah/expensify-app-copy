import type {OnyxEntry} from 'react-native-onyx';
import type {WithWritableReportOrNotFoundProps} from '@pages/iou/request/step/withWritableReportOrNotFound';
import type SCREENS from '@src/SCREENS';
import type * as OnyxTypes from '@src/types/onyx';
import {WithCurrentUserPersonalDetailsProps} from "@components/withCurrentUserPersonalDetails";

type IOURequestStepOnyxProps = {
    user: OnyxEntry<OnyxTypes.User>;

    /** Personal details of all users */
    personalDetails: OnyxEntry<OnyxTypes.PersonalDetailsList>;

    /** The policy which the user has access to and which the report is tied to */
    policy: OnyxEntry<OnyxTypes.Policy>;

    /** Whether the confirmation step should be skipped */
    skipConfirmation: OnyxEntry<boolean>;
};

type IOURequestStepScanProps = IOURequestStepOnyxProps &
    WithCurrentUserPersonalDetailsProps &
    WithWritableReportOrNotFoundProps<typeof SCREENS.MONEY_REQUEST.STEP_SCAN | typeof SCREENS.MONEY_REQUEST.CREATE> & {
        /** Holds data related to Money Request view state, rather than the underlying Money Request data. */
        transaction: OnyxEntry<OnyxTypes.Transaction>;
    };

export type {IOURequestStepOnyxProps, IOURequestStepScanProps};

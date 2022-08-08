import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutScreen() {
  return (
    <Container>
      <Row>
        <Col>
          <h3 dir="rtl">ברוכים הבאים לאתר שלי</h3>
        </Col>
      </Row>
      <Row style={{ marginTop: '12px' }}>
        <Col>
          <p dir="rtl">
            אתר זה הינו אתר קניות, <br />
            אפשר להציג את הפריטים לפי סינון מוצר / מחיר / רייטינג / קטגוריה.{' '}
            <br />
            ניתן להוסיף פריטים לעגלה ללא הרשמה לאתר אך על מנת לשלם צריך להרשם.{' '}
            <br />
            משתמש רשום יכול להוסיף, למחוק ולשנות כמות פריטים בעגלה, לבחור את
            אמצעי התשלום להקליד את פרטי המשלוח ולשלם. <br />
            בנוסף ישנו משתמש אדמין שיכול להוסיף פריטים חדשים, למחוק ולשנות פרטים
            במוצרים קיימים, <br />
            לראות את רשימת המשתמשים באתר ולערוך את השם/אימייל <br />
            ניתן לראות את היסטוריית הזמנות באתר וישנו עמוד דשבורד. <br />
            את פרטי משתמש האדמין ניתן למצוא בקובץ ה- data שנמצא ב- backend
            <br />
            אצרף גם את קובץ .env
            <br />
            האתר בנוי מ - React, Node.js, Mongodb, Express
          </p>
        </Col>
      </Row>
    </Container>
  );
}
